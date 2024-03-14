$( document ).ready(function() {
	$.validator.messages.required = 'Пожалуйста, введите данные';


	const homeSiler = document.querySelector('.home-swiper')
if(!!homeSiler){
const swiper = new Swiper(homeSiler, {
  speed: 800,
	autoplay: {
		delay: 5000
	},
	loop: true,
	pagination: {
		el: ".home-swiper--pagination",
		bulletClass: 'home-swiper--bullet',
		bulletActiveClass: 'home-swiper--bullet-active',
		clickable: true,
	},
	navigation: {
		nextEl: '#arrowRight',
		prevEl: '#homePrev'
	}
});

}

const homeSale = document.querySelector('.home-sale_slider')
if(!!homeSale){
const saleHome = new Swiper('.home-sale_slider', {
  speed: 800,
	slidesPerView: 1.1,
	spaceBetween: 10,
	breakpoints: {
		1200: {
      slidesPerView: 4,
			spaceBetween: 30,
    },
		1050: {
      slidesPerView: 3.2,
			spaceBetween: 30,
    },
		850: {
      slidesPerView: 2.5,
			spaceBetween: 30,
    },
		660: {
      slidesPerView: 2.2,
			spaceBetween: 30,
    },
		450: {
      slidesPerView: 1.5,
			spaceBetween: 30,
    },
	}
});
}

const homeSchedule = document.querySelector('.swiper-schedule')
if(!!homeSchedule){
const swiperSchedule = new Swiper('.swiper-schedule', {
  speed: 800,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-schedule-next',
		prevEl: '.swiper-schedule-prev',
		disabledClass: 'swiper-schedule-disabled'
	}
});
}




const accordions = Array.from(document.querySelectorAll('.accordion-container'));
if(accordions.length){
new Accordion(accordions, {
	showMultiple: true,
	elementClass: 'accordion-el',
	triggerClass: 'accordion-btn',
	panelClass: 'accordion-info',
	activeClass: 'accordion-active',
  beforeOpen: (el) => toggleTextBtn(el, '[data-accordion-toggle]'),
  beforeClose: (el) => toggleTextBtn(el, '[data-accordion-toggle]')
});
function toggleTextBtn(el, attr){
	const btn = el.querySelector(attr)
	if(!!btn){
	const val = btn.dataset.accordionToggle
	const text =  btn.querySelector('.accordion-btn_text')
	btn.dataset.accordionToggle = text.textContent
	text.textContent = val
	}
}
}

const select = document.querySelectorAll('[data-select]')
if(!!select.length){
	setCustomSelect(select)

}

function setCustomSelect(selects){
	selects.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			classNames: {
				containerOuter: 'select',
				containerInner: 'select-value_wrapper',
				listDropdown: 'select-list_dropdown',
				openState: 'select-open',
				itemChoice: 'select-item',
			}

			})

		});
}


const dataTab = document.querySelector('[data-tab]')
if(!!dataTab){
	new OzimnadTabs();
}

const  tippyBtn = document.querySelectorAll('[data-template]')
if(tippyBtn.length){
tippy(tippyBtn, {
	interactive: true,
	theme: 'white',
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
});

}
jQuery.validator.addMethod('phoneRU', function (value, element) {
	return (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value));
}, 'Неверный номер телефона');

jQuery.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^([а-яё ]+|[a-z ]+)$/i.test(value);
}, "Поле может состоять из букв и пробелов, без цифр");

const convertQueryStringToObject = (str) => {
	if(str.includes("?")){
	const search = str.substring(str.indexOf("?")+1)
	return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""? value:decodeURIComponent(value) })
	}

};

$(document).on("click", ".ajax-popup", function () {
	var a = $(this);

	$.magnificPopup.open({
		items: { src: a.attr("data-href") },
		type: "ajax",
		overflowY: "scroll",
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		ajax: {
			tError: "Error. Not valid url",
		},
		closeMarkup: `<button title="%title%" type="button" class="mfp-close">
		<svg  viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" id="close">
	<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
		</button>`,

		callbacks: {
			ajaxContentAdded: function(mfpResponse) {
				// const btnTrigger = $.magnificPopup.instance.st.el[0]
				// const fildData = convertQueryStringToObject(btnTrigger.href)
				// for (const key in fildData) {
				// 	$(`.modal-content input[name=${key}]`)[0].value = fildData[key]
				// }

				// document.querySelectorAll('[data-select-modal]').forEach(el => {
				// 	const choices = new Choices(el, {
				// 	searchEnabled: false,
				// 	classNames: {
				// 		containerOuter: 'select',
				// 		containerInner: 'select-value_wrapper',
				// 		listDropdown: 'select-list_dropdown',
				// 		openState: 'select-open',
				// 		itemChoice: 'select-item',
				// 		disabledState: 'select-disabled'
				// 	}
				// 	})
				// 	selectsList.push(choices)
				// })
				// selectsList = []

				if($("input[type=tel]")) {
					$("input[type=tel]").mask("+7(999) 999-9999")
				}

				const customSelect = document.querySelectorAll('.style-select')

				if(customSelect.length) {
					customSelect.forEach(element => {
						$(element).select2({
							minimumResultsForSearch: -1
						});
					});
				}

				document.querySelectorAll('.field-group-area').forEach(el => {
					if(!!el?.querySelector('input')?.value){
						el.classList.add('field-group-area--focus')
					}
				})
				const dateBirth = document.querySelector('#dateBirth')
				const day = document.querySelector('#day')
				if(dateBirth){
					const picker = datepicker(dateBirth, {
						customMonths: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','октябрь','Ноябрь','Декабрь'],
						customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
						overlayButton: "Перейти",
						overlayPlaceholder: 'Ввведите год',
						formatter: (input, date, instance) => {
							const value = date.toLocaleDateString()
							input.value = value
						},
						onSelect: (instance, date) => {
							!!date ? instance.parent.classList.add('field-group-area--focus') : instance.parent.classList.remove('field-group-area--focus')
						}
					})
				}

				if(day) {
					const days = datepicker(day, {
						customMonths: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','октябрь','Ноябрь','Декабрь'],
						customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
						overlayButton: "Перейти",
						overlayPlaceholder: 'Ввведите год',
						formatter: (input, date, instance) => {
							const value = date.toLocaleDateString()
							input.value = value
						},
						onSelect: (instance, date) => {
							!!date ? instance.parent.classList.add('field-group-area--focus') : instance.parent.classList.remove('field-group-area--focus')
						}
					})
				}
			}
		}
	});
	return false;
});

document.addEventListener('focusout', ({ target }) => {
	if(!target?.value?.trim() && !!target?.closest('.field-group-area')){
		target.closest('.field-group-area').classList.remove('field-group-area--focus')
	}

})
document.addEventListener('change', ({ target }) =>{
	if(!!target.closest('.fiele-item')){
		target.closest('.fiele-item').querySelector('.fiele-text').innerHTML = target.files[0].name
	}
})
document.addEventListener('focusin', ({ target }) => {
	if(!!target?.closest('.field-group-area')){
		target.closest('.field-group-area').classList.add('field-group-area--focus')
	}
}, true)
$('.image-link').magnificPopup({
	type:'image',
	closeMarkup: `<button title="%title%" type="button" class="mfp-close">
	<svg  viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" id="close">
<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
	</button>`,
})


document.addEventListener('click', (e) => {
	const target = e.target
	if(!!e.target.closest('.header-aside_wrapper')){
	if(target.classList.contains('parent')){
		e.preventDefault()
		const wrapper = target.closest('li')
		wrapper.querySelector('.dropdown').classList.add('dropdown--open')
	}
	if(!!target.closest('.header-aside_back')){
		e.preventDefault()
		target.closest('.dropdown').classList.remove('dropdown--open')
	}
	}

})


const addressMap = document.querySelector('#addressMap')

if(!!addressMap){
	const mapAddres = document.querySelector('#mapAddress')
	const mapMain = document.querySelector('#mapMain')
	addressMap.addEventListener('change', ({ target }) => {
		if(target.checked){
			mapAddres.style.display = 'none'
			mapMain.style.display = 'flex'
		} else{
			mapAddres.style.display = 'flex'
			mapMain.style.display = 'none'
		}
	})
}


const addFieldsFio = document.querySelector('#addFieldsFio')
let patientIndex = 0;

if(!!addFieldsFio){
	// let index = 1
	// const templateField = document.querySelector('#templateField')
	addFieldsFio.addEventListener('click', ({ target }) => {
		patientIndex++;

		const fields = `
			<div class="col-lg-6 col-12">
					<div class="field-group-area nalog-form_item">
							<label for="fio" class="label-control-area">ФИО пациента:</label>
							<input type="text" class="field-control-area" name="fio[${patientIndex}]">
					</div>
			</div>
			<div class="col-lg-6 col-12">
					<div class="field-group-area nalog-form_item">
							<label for="date" class="label-control-area">Дата рождения:</label>
							<input type="text" class="field-control-area field-control-date" name="date[${patientIndex}]">
					</div>
			</div>
    `

		target.parentNode.insertAdjacentHTML('beforebegin', fields)

		$(".field-control-date").mask('99.99.9999', {placeholder:"дд мм гггг"})
		// index += 1
		// console.log(index)
	})
}
$("#dokumentyDlyaNalogovoi").validate({
	rules: {
		name: {
			required: true,
			lettersonly: true
		},
		message: {
			required: true
		},
		tel: {
			phoneRU: true,
			required: true
		},
		email: {
			email: true,
			required: true
		}
	},

	messages: {
		email: 'Введите корректный email',
	},
});
$(".field-control-date").mask('99.99.9999', {placeholder:"дд мм гггг"})

let $header = $("#headerSearch")
let scroll = 0
let active = "show-header"
$(window).scroll(function() {
	const scrollY = $(window).scrollTop()
  if ((scrollY > scroll) && (scrollY > 350)) {
    $header.addClass(active)
  } else {
    $header.removeClass(active)
  }
})

$("input[type=tel]").mask("+7(999) 999-9999")

const customSelect = document.querySelectorAll('.style-select')

if(customSelect.length) {
	customSelect.forEach(element => {
		$(element).select2({
			minimumResultsForSearch: -1
		});
	});
}

});