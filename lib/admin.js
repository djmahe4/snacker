export const ADMIN_EMAIL = "mathewsmelvin5@gmail.com";

/**
 * Checks if a Clerk user is the designated admin.
 * Evaluates both client user object and server user object formats.
 */
export const isAdminUser = (user) => {
  if (!user) return false;

  // Clerk client user (useUser)
  if (user.primaryEmailAddress?.emailAddress?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    return true;
  }

  // Clerk server user (currentUser) or list of email addresses
  if (Array.isArray(user.emailAddresses)) {
    return user.emailAddresses.some(
      (e) => (e.emailAddress || e)?.toLowerCase() === ADMIN_EMAIL.toLowerCase()
    );
  }

  return false;
};
