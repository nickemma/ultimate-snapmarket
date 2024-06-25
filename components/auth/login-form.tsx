"use client";
import { AuthCard } from "./auth-card";

export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Create an account"
      showSocials
    >
      <div></div>
    </AuthCard>
  );
};
