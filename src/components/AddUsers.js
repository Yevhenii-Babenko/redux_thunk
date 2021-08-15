import React from 'react';

export default function AddUsers() {
  return (
    <>
      <h1>Add user</h1>
      <form>
        <input type="text" placeholder="User's name" />
        <input type="text" placeholder="@username" />
        <input type="url" />
      </form>
    </>
  );
}
