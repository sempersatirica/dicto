
function toggle(target) {
  console.log('toggle ' + target);
}

export const dropdown = () => {
  console.log('load dropdowns');

  const dropdowns = document.getElementsByClassName('dropdown-header');

  for (const dd of dropdowns) {
    dd.onclick = toggle;
  }
}