module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
     await db.collection('users').updateOne({_id: "5e8643edd411aa54c0357fbd"}, {$set: {premium: true}});
    
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('users').updateOne({_id: "5e8643edd411aa54c0357fbd"}, {$set: {premium: false}});
  }
};
