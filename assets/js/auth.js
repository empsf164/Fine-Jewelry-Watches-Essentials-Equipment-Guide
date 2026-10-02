/**
 * AURELLE — Authentication & Session Manager
 * Front-end simulation of Login, Signup, Session, and User Interests
 */

const AURELLE_AUTH = (function () {
  const SESSION_KEY = 'aurelle_session';
  const USERS_KEY = 'aurelle_users';

  // Seed default demo user if not existing
  if (!localStorage.getItem(USERS_KEY)) {
    const defaultUsers = [
      {
        name: 'Julian Vance',
        email: 'collector@aurelle.luxury',
        password: 'password123',
        interests: ['Watches', 'Fine Jewelry', 'Craftsmanship']
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }

  function getCurrentUser() {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, message: 'Account not found with this email address.' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Incorrect password. Please try again.' };
    }

    const sessionData = {
      name: user.name,
      email: user.email,
      interests: user.interests || ['Fine Jewelry', 'Watches'],
      loginTime: new Date().toISOString()
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    updateAuthUI();
    return { success: true, user: sessionData };
  }

  function signup(name, email, password, interests = []) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existing) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      interests: interests
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Automatically log in
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      interests: newUser.interests,
      loginTime: new Date().toISOString()
    }));

    updateAuthUI();
    return { success: true, user: newUser };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    updateAuthUI();
    window.location.reload();
  }

  function resetPassword(email) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, message: 'No registered collector found with this email.' };
    }

    return { success: true, message: `Reset link successfully sent to ${email}. Check your inbox.` };
  }

  function updateAuthUI() {
    const user = getCurrentUser();
    const authContainers = document.querySelectorAll('.auth-nav-container');

    authContainers.forEach(container => {
      if (user) {
        const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        container.innerHTML = `
          <div class="user-menu-btn" title="Logged in as ${user.name}">
            <span class="user-avatar">${initials}</span>
            <span class="user-name" style="font-weight: 500;">${user.name}</span>
            <button onclick="AURELLE_AUTH.logout()" class="btn-text" style="font-size: 0.75rem; margin-left: 6px; color: var(--text-muted);" title="Sign Out">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </button>
          </div>
        `;
      } else {
        container.innerHTML = `
          <a href="signup.html" class="btn btn-primary btn-sm">Sign Up</a>
        `;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
  });

  return {
    getCurrentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateAuthUI
  };
})();

window.AURELLE_AUTH = AURELLE_AUTH;
