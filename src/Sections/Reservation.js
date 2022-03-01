import ad_el_img from './../../asset/blog_post_04.jpg';

const Reservation = () => {
  // return an array of the elements surrounded by the give tag name
  const handle_list_els = (arr, tag) => {
    return arr.map((arr_item) => {
      return `<${tag}> ${arr_item} </${tag}>`;
    });
  };

  const section_res_el = document.createElement('section');
  const container_el = document.createElement('div');
  const header_el = document.createElement('header');
  const section_form_hold_el = document.createElement('section');
  const article_ads_el = document.createElement('aricle');
  const article_reservation_form_el = document.createElement('aricle');
  const h2_el = document.createElement('h2');
  const form_el = document.createElement('form');

  const article_row_one_el = document.createElement('article');
  const article_row_two_el = document.createElement('article');
  const article_row_three_el = document.createElement('article');

  const article_work_hr_el = document.createElement('article');
  const article_work_day_el = document.createElement('article');

  const article_tel_el = document.createElement('article');
  const article_name_el = document.createElement('article');

  const article_place_el = document.createElement('article');
  const article_submit_el = document.createElement('article');

  const select_work_day_el = document.createElement('select');
  const select_work_hr_el = document.createElement('select');
  const select_place_el = document.createElement('select');

  const work_days = [
    'Select day',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const work_hours = [
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
  ];

  const num_places = [1, 2, 3, 4, 5];

  // Adding the option element in the select elements
  select_work_hr_el.innerHTML = handle_list_els(work_hours, 'option');

  console.log(handle_list_els(work_days, 'option'));

  // Assigning classes respective per styling file.
  section_res_el.classList.add('reservation');
  container_el.classList.add('container');
  section_form_hold_el.classList.add('b-fo');
  article_reservation_form_el.classList.add('reservation-form');
  article_row_one_el.classList.add('row');
  article_row_two_el.classList.add('row');
  article_row_three_el.classList.add('row');

  // Adding content
  header_el.innerHTML = `<h2>Reserve A Table</h2>`;
  article_ads_el.innerHTML = `<img src=${ad_el_img} >`;
  h2_el.innerText = `Reservation`;

  select_place_el.innerHTML = handle_list_els(num_places, 'option');
  select_work_day_el.innerHTML = handle_list_els(work_days, 'option');
  select_work_hr_el.innerHTML = handle_list_els(work_hours, 'option');

  // this is the form container it has two elements an h2 heading
  // and the actual form itself
  article_reservation_form_el.appendChild(h2_el);
  article_reservation_form_el.appendChild(form_el);

  // articles in the form
  article_work_day_el.appendChild(select_work_day_el);
  article_work_hr_el.appendChild(select_work_hr_el);

  article_name_el.innerHTML = `<input type="text" name="name" id="name" />`;
  article_tel_el.innerHTML = `<input type="tel" name="tel" id="tel" />`;

  article_place_el.appendChild(select_place_el);
  article_submit_el.innerHTML = `<button type="submit">Reserve Table</button>`;
  // in the
  // in row one we have two articles for
  article_row_one_el.appendChild(article_work_day_el);
  article_row_one_el.appendChild(article_work_hr_el);

  // in row two we have two ele the name and tel
  article_row_two_el.appendChild(article_name_el);
  article_row_two_el.appendChild(article_tel_el);

  // in third row we have tow el the submit and place num
  article_row_three_el.appendChild(article_place_el);
  article_row_three_el.appendChild(article_submit_el);

  // the form holder has two elements the one with an img and the
  // actuall form container
  section_form_hold_el.appendChild(article_ads_el);
  section_form_hold_el.appendChild(article_reservation_form_el);

  // in the actual form there is three elements
  // which are the respective rows
  form_el.appendChild(article_row_one_el);
  form_el.appendChild(article_row_two_el);
  form_el.appendChild(article_row_three_el);

  // in container we have the header and the form holder
  container_el.appendChild(header_el);
  container_el.appendChild(section_form_hold_el);

  // in the section we have only container
  section_res_el.appendChild(container_el);

  return section_res_el;
};

export default Reservation;
