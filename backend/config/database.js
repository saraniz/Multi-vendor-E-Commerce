const { PrismaClient } = require('../prisma/app/generated/prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL, // Ensure correct URL with pgbouncer=true
      },
    },
  });
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL, // Ensure correct URL here too
        },
      },
    });
  }
  prisma = global.__prisma;
}

module.exports = prisma;
