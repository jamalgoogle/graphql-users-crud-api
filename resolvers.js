const users = [
   { id: 1, name: 'Bassem Jamal' },
   { id: 2, name: 'Ayman Naser' },
   { id: 3, name: 'Ali wa3el' },
   { id: 4, name: 'Bassam Abd Elhakeem' },
];

const resolvers = {
   Query: {
      getUsers: () => users,
      getUserByName: (_, { name }) => users.find(user => user.name === name),
   },
   Mutation: {
      addUser: (_, { name }) => {
         const newUser = {
            id: users.length + 1,
            name,
         };
         users.push(newUser);
         return newUser;
      },

      deleteUser: (_, { id }) => {
         const index = users.findIndex(user => user.id == id);
         if (index === -1) return false;
         users.splice(index, 1);
         return true;
      },

      updateUser: (_, { id, name }) => {
         const user = users.find(user => user.id == id);
         console.log(user);
         if (!user) throw new Error("User not found");
         user.name = name;
         return user;
      },

      addUsersBulk: (_, { names }) => {
         const addedUsers = names.map(name => {
            const newUser = {
               id: users.length + 1,
               name,
            };
            users.push(newUser);
            return newUser;
         });
         return addedUsers;
      },

      deleteAllUsers: () => {
         users.length = 0;
         return true;
      },

   },
};

module.exports = resolvers;
