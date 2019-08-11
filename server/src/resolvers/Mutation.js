const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

/**
 * Create the new user account and sign the user in
 * args.name - The descriptive name of the user
 * args.email - The email for the user
 * args.password - The password for the user (stored hashed)
 * @return AuthPayload
 */
async function signup (parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user
  }
}

/**
 * Login the user
 * args.email - The email to signin with
 * args.password - The password for the user
 * @return AuthPayload - On successful login
 */
async function login (parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user
  }
}

/**
 * Add a new measurement type
 * args.name - The name of the thing being measured
 * args.unit - The unit that's used for this measurment
 * args.description - A description of the measurement
 */
async function addMeasurement (parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createMeasurement({
    name: args.name,
    unit: args.unit,
    description: args.description,
    addedBy: { connect: { id: userId } }
  })
}

module.exports = {
  signup,
  login,
  addMeasurement
}
