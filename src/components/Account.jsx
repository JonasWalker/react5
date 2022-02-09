import React from 'react';

export const Account = () => (
  <React.Fragment>
    <head>
      <meta name="theme-color" content="#7952b3"></meta>
      <link href="signin.css" rel="stylesheet" />
      <link
        rel="icon"
        href="/BugItLogo.png"
        sizes="32x32"
        type="image/png"
      ></link>
    </head>
    <body class="text-center">
      {/* class="form-floating col row g-3" */}
      <form class="row g-3">
        <div class="row">
          <div class="col-md-2">
            <label for="inputFirstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputFirstName"
              placeholder="John"
            />
          </div>
          <div class="col-md-2">
            <label for="inputLastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputAddress"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-md-2">
            <label for="inputPhoneNumber" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="inputPhoneNumber"
              placeholder="(XXX)XXX-XXXX"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <label for="inputCompany" class="form-label">
              Company
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCompany"
              placeholder="BugIt"
            />
          </div>
          <div class="col-md-2">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              Bio
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-md-4">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </body>
  </React.Fragment>
);