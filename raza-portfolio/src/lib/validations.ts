import { z } from "zod";
import { projectTypes } from "@/data/services";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100, "Name is too long."),
  email: z.email("Enter a valid email address.").max(200, "Email is too long."),
  projectType: z.enum(projectTypes, { message: "Choose a project type." }),
  budget: z.string().trim().max(100, "Keep the budget note under 100 characters.").optional(),
  details: z.string().trim().min(10, "Add a few more details (at least 10 characters).").max(2000, "Keep details under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
