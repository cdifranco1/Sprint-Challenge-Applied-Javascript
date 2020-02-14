// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(dateValue, headingText, tempValue, ) {
  const container = document.createElement("div"),
        date = document.createElement('span'),
        heading = document.createElement('h1'),
        temp = document.createElement('span');

        container.classList.add('header');
        date.classList.add('date');
        temp.classList.add('temp')

        date.textContent = dateValue;
        heading.textContent = headingText;
        temp.textContent = tempValue;
      
  container.append(date, heading, temp);

  return container
}

document.querySelector('.header-container').append(Header(`March 28, 2019`, 'Lambda Times', '98°'))
