const Mutations = {

  async createUser(_, args, context, info) {
    
    const user = await context.db.mutation.createUser({
      data: {
        ...args
      }
    }, info)

    console.log(user)

    return user;

  },
  async createShot(_, args, { db }, info) {
    // first check if the user is logged in!
    console.log(args)

    const user = await db.query.user({
      where: { id: "5c3261089bd1160009aa70e0" }
    });

    const shot = await db.mutation.createShot({
      data: {
        ...args,
        user: { connect: { id: user.id } },
      }
    }, info);

     return shot
  },

  async createComment(_, args, { db }, info ) {

    const user = await db.query.user({
      where: { id: "5c2eb7d56344590009c22341" }
    });

    const shot = await db.query.shot({
      where: { id: "5c2eb7f76344590009c22342" }
    });

    const comment = await db.mutation.createComment({
      data: {
        content: args.content,
        user: { connect: { id: user.id } },
        shot: { connect: { id: shot.id } }
      }
    }, info);

    return comment;
  }

}

module.exports = Mutations;