import { getUserId } from '../utils'

async function info(parent, args, context, info) {
  return 'Hello query'
}

async function getMeasurements(parent, args, context, info) {
  getUserId(context)
  return context.prisma.measurements()
}

module.exports = {
  info,
  getMeasurements,
}
