export const makeHtmlString = (userArg) => {
  //   console.log(userArg);

  const str = userArg.reduce(
    (acc, user) =>
      user.length
        ? acc + `<li>${user.split(',')[0]}:${user.split(',')[1]}</li>`
        : acc,
    ''
  );
  //   console.log(str);

  // <li>Shankar</li>
  // <li>pandey</li>

  return (
    `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>User Diary</title>

    
  </head>
  <body>
    <div class="wrapper">
      <nav style="background: black; color: white">
        <div>SSR</div>
        <div>
          <a href="#">Home </a>
          <a href="/login">Login </a>
          <a href="/register">Register </a>
        </div>
      </nav>
     
   
   
    
      <div class="container mt-5">
        
      <h1 class='text-center'>Welcome to the User System</h1>
      <hr /> <ul>` +
    str +
    `</ul>
        
      </div> 
    </div>
  </body>
</html>
`
  );
};
