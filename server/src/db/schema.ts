import {
  uuid,
  text,
  pgTable,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const urls = pgTable("urls", {
  id: uuid("id").primaryKey().defaultRandom().unique().notNull(),
  url: text("url").notNull(),
  uid: text("uid").notNull(),
  clicks: integer("clicks").default(0),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
});