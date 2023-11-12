let form = document.getElementById('form')

let btnElem = document.getElementById('subBtn');

let razrab = document.getElementById('razrab');

let siteName = document.getElementById('site');

let siteUrl = document.getElementById('siteUrl');

let date = document.getElementById('date');

let guests = document.getElementById('guests');

let connect = document.getElementById('email');

let checkbox = document.getElementById('check');

let rubric = document.getElementById('rubric');

let radioBtn = document.getElementsByClassName('radioBtn');

let coment = document.getElementById('comments');

let span1 = document.getElementById('span1')

const radioBtnErr = document.getElementById('radioBtnErr')


form.addEventListener('submit', formSubmit)

razrab.addEventListener('blur', ()=>razrabValid(false) )
siteName.addEventListener('blur', ()=>siteNameValid(false) )
siteUrl.addEventListener('blur', ()=>siteUrlValid(false) )

guests.addEventListener('blur', ()=>guestsValid(false) )
connect.addEventListener('blur', ()=>connectValid(false))
rubric.addEventListener('change', ()=>rubricValid(false))
checkbox.addEventListener('change', ()=>checkboxValid(false))
date.addEventListener('blur', ()=>dateValid(false))
coment.addEventListener('blur', ()=>comentValid(false))




function razrabValid(focusOnErr) {
  let errCount = 0;
  const razrErr = document.getElementById('razrabError')
  if (razrab.value === "") {
    razrErr.innerHTML = 'Заполните поле'
    errCount++
  } else if(razrab.value.length < 8 || razrab.value.length > 20) {
    razrErr.innerHTML = 'От 8 до 20 символов'
    errCount++
  }else{
    razrErr.innerHTML = ''
  }
  if (focusOnErr && (razrab.value === "" || razrab.value.length < 8 || razrab.value.length > 20))
    razrab.focus()
  return errCount
}

function siteNameValid(focusOnErr) {
  let errCount = 0;
  const siteNameErr = document.getElementById('siteNameErr')
  if (siteName.value === "") {
    siteNameErr.innerHTML = 'Заполните поле'
    errCount++
  } else if(siteName.value.length < 8 || siteName.value.length > 20) {
    siteNameErr.innerHTML = 'От 8 до 20 символов'
    errCount++
  }else{
    siteNameErr.innerHTML = ''
  }
  if (focusOnErr && (siteName.value === "" || siteName.value.length < 8 || siteName.value.length > 20))
    siteName.focus()
  return errCount
}

function siteUrlValid(focusOnErr) {
  let errCount = 0;
  const siteUrlErr = document.getElementById('siteUrlErr')
  if (siteUrl.value === "") {
    siteUrlErr.innerHTML = 'Заполните поле'
    errCount++
  } else if(siteUrl.value.length < 8 || siteUrl.value.length > 20) {
    siteUrlErr.innerHTML = 'От 8 до 20 символов'
    errCount++
  }else{
    siteUrlErr.innerHTML = ''
  }
  if (focusOnErr && (siteUrl.value === "" || siteUrl.value.length < 8 || siteUrl.value.length > 20))
  siteUrl.focus()
  return errCount
}

function guestsValid(focusOnErr) {
  let errCount = 0;
  const guestsErr = document.getElementById('guestsErr')
  if (guests.value === "") {
    guestsErr.innerHTML = 'Заполните поле'
    errCount++
  } else if(guests.value < 1 || guests.value > 100) {
    guestsErr.innerHTML = 'От 1 до 100 пользователей'
    errCount++
  }else{
    guestsErr.innerHTML = ''
  }
  if (focusOnErr && (guests.value === "" || guests.value < 1 || guests.value > 100))
  guests.focus()
  return errCount
}

function connectValid(focusOnErr) {
  let errCount = 0;
  const connectErr = document.getElementById('connectErr')
  if (connect.value === "") {
    connectErr.innerHTML = 'Заполните поле'
    errCount++
  } else if(!/@$/.test(connect.value)) {
    connectErr.innerHTML = 'Должен присудствовать знак @'
    errCount++
  }else{
    connectErr.innerHTML = ''
  }
  if (focusOnErr && (connect.value === "" || !/@$/.test(connect.value)))
  connect.focus()
  return errCount
}

function rubricValid(focusOnErr) {
  let errCount = 0;
  const rubricErr = document.getElementById('rubricErr')
  if (rubric.value === '1') {
    rubricErr.innerHTML = 'Здоровье отсудствует'
    errCount++
  } else if(rubric.value === '2') {
    rubricErr.innerHTML = 'Быт непридусмотрен'
    errCount++
  }else{
    rubricErr.innerHTML = ''
  }
  if (focusOnErr && (rubric.value === '1' || rubric.value === '2'))
  rubric.focus()
  return errCount
}

function checkboxValid(focusOnErr) {
  let errCount = 0;
  const checkboxErr = document.getElementById('checkboxErr')
  if (!checkbox.checked) {
    checkboxErr.innerHTML = 'Нужно поставить галочку'
    errCount++
  }else{
    checkboxErr.innerHTML = ''
  }
  if (focusOnErr && (!checkbox.checked))
  checkbox.focus()
  return errCount
}

function dateValid(focusOnErr) {
  let errCount = 0;
  const dateErr = document.getElementById('dateErr')
  if (date.value > '2023-11-08') {
    dateErr.innerHTML = 'Слишком поздно'
    errCount++
  } else if(date.value < '2023-11-02') {
    dateErr.innerHTML = 'Слишком рано'
    errCount++
  }else{
    dateErr.innerHTML = ''
  }
  if (focusOnErr && (date.value > '2023-11-08' || date.value < '2023-11-02'))
  date.focus()
  return errCount
}

function comentValid(focusOnErr) {
  let errCount = 0;
  const comentErr = document.getElementById('comentErr')
  if (siteUrl.value === "") {
    comentErr.innerHTML = 'Заполните поле'
    errCount++
  } else if(coment.value.length < 10 || coment.value.length > 100) {
    comentErr.innerHTML = 'От 10 до 100 символов'
    errCount++
  }else{
    comentErr.innerHTML = ''
  }
  if (focusOnErr && (coment.value === "" || coment.value.length < 10 || siteUrl.value.length > 100))
  coment.focus()
  return errCount
}

function radioBtnValid(focusOnErr) {
  let errCount = 0;
  
  for(let i=0;i<radioBtn.length;i++){
    radioBtn[i].addEventListener('change', ()=>radioBtnValid(false))
    if(!radioBtn[i].checked){
      radioBtnErr.innerHTML = 'Выберете форму'
    errCount++
  }else{
    radioBtnErr.innerHTML = ''
  }
  return errCount
  }
  
  if (focusOnErr && (!radioBtn[i].checked))
  radioBtn[i].focus(radioBtn[i])
  return errCount
}

function formSubmit(event) {
  let errCount = 0;
  errCount += razrabValid(!errCount)
  errCount += siteNameValid(!errCount)
  errCount += siteUrlValid(!errCount)
  errCount += guestsValid(!errCount)
  errCount += connectValid(!errCount)
  errCount += rubricValid(!errCount)
  errCount += checkboxValid(!errCount)
  errCount += dateValid(!errCount)
  errCount += comentValid(!errCount)
  errCount += radioBtnValid(!errCount)



  if (errCount)
    event.preventDefault()
}
console.log(radioBtn)