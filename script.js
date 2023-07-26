'use strict'

const open = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

open.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
