"use server";

import { revalidatePath } from "next/cache";

export async function test() {
  console.log("I am called on server");
}
