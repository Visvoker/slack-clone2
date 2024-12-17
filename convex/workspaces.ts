import { query } from "./_generated/server"
import { auth } from "./auth"


export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspaces").collect();
  }
})