function addedBy(parent, args, context) {
  return context.prisma.measurement({ id: parent.id }).addedBy()
}

module.exports = {
  addedBy,
}
