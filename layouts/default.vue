<template>
  <div>
    <Header/>
    <MyNav class="nav--header"/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import MyNav from '~/components/MyNav.vue'

export default {
  name: 'Default',

  components: {
    Header,
    Footer,
    MyNav
  }
}
</script>


<style lang="scss">
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat:500,600,700&subset=cyrillic');

@font-face {
  font-family: 'LavaPro-Med';
  src: url('~/assets/fonts/LavaPro-Med/LavaPro-Med.eot');
  src: url('~/assets/fonts/LavaPro-Med/LavaPro-Med.woff2') format('woff2'),
    url('~/assets/fonts/LavaPro-Med/LavaPro-Med.woff') format('woff'),
    url('~/assets/fonts/LavaPro-Med/LavaPro-Med.ttf') format('truetype'),
    url('~/assets/fonts/LavaPro-Med/LavaPro-Med.svg#LavaPro-Med') format('svg'),
    url('~/assets/fonts/LavaPro-Med/LavaPro-Med.eot?#iefix')
      format('embedded-opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'LavaPro-Reg';
  src: url('~/assets/fonts/LavaPro-Reg/LavaPro-Reg.eot');
  src: url('~/assets/fonts/LavaPro-Reg/LavaPro-Reg.woff2') format('woff2'),
    url('~/assets/fonts/LavaPro-Reg/LavaPro-Reg.woff') format('woff'),
    url('~/assets/fonts/LavaPro-Reg/LavaPro-Reg.ttf') format('truetype'),
    url('~/assets/fonts/LavaPro-Reg/LavaPro-Reg.svg#LavaPro-Reg') format('svg'),
    url('~/assets/fonts/LavaPro-Reg/LavaPro-Reg.eot?#iefix')
      format('embedded-opentype');
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'Montserrat', sans-serif;
}
* {
  box-sizing: border-box;
  color: #191919;
}
*:focus {
  outline-color: #d5001a;
  outline-width: 2px;
}

a {
  text-decoration: none;
}

.link {
  text-decoration: none;
  transition: 0.3s ease-out;
  padding: 0 0 1px 0;
}
.link:hover {
  color: #d5001a;
  box-shadow: 0 0.7px 0 rgba(213, 0, 26, 1);
}
.link--red {
  color: #ef1832;
  box-shadow: 0 0.7px 0 rgba(239, 24, 50, 0.6);
}
.link--lava {
  font-family: 'LavaPro-Med';
  padding: 0;
}
.link--black {
  box-shadow: 0 0.7px 0 #191919;
}

h1 {
  font: 700 30px/1.4 'Montserrat';
}
h2 {
  font: 700 24px/1.4 'Montserrat';
}
h3 {
  font: 600 22px/1.4 'Montserrat';
}
h4 {
  font: 600 16px/1.5 'Montserrat';
}
h5 {
  font: 600 17px/1.4 'Montserrat';
}
p {
  font: 400 20px/1.5 'Montserrat';
}
::-webkit-input-placeholder {
  color: #c2c2c3;
}
::-moz-placeholder {
  color: #c2c2c3;
}
:-ms-input-placeholder {
  color: #c2c2c3;
}
:-moz-placeholder {
  color: #c2c2c3;
}

.main {
  display: flex;
  flex-direction: column;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
.main--long {
  max-width: 1200px;
}
.main--mt-30 {
  margin-top: 30px;
}

.section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.section--column {
  flex-direction: column;
}
.section__heading--articles {
  margin: 20px 0 30px 0;
}
.nav--header .menu__item:first-child {
  display: none;
}
</style>
