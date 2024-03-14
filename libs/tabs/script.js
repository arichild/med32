class OzimnadTabs {
	constructor(options={}) {

			//TODO нужно сделать multiple tabs

			const defaultOptions = {
					selector: '[data-tabs="tabs"]',
					btnSelector: '[data-tabs="btn"]',
					tabSelector: '[data-tabs="tab"]',
					type: 'default',
					activeIndex: 0
			};

			//Инициализация настроек
			Object.assign(this, defaultOptions, options);

			if (typeof this.selector ==='string'){
					this.tabs = document.querySelector(this.selector);
			} else{
					this.tabs = this.selector;
			}


			if (!this.tabs) {
					console.error(`Селектор ${this.selector} не найден!`);
					return;
			}

			this.btnsList = this.tabs.querySelectorAll(this.btnSelector);
			this.tabsList = this.tabs.querySelectorAll(this.tabSelector);

			if (this.btnsList.length !== this.tabsList.length){
					console.error("Количество кнопок и табов должно быть равным");
					return;
			}

			this.init();

	}

	init() {
			if (this.type==='absolute'){
					this.tabs.classList.add('absolute');
					this.setHeight();
			} else{
					this.tabs.classList.remove('absolute');
			}

			this.activate();
			this.btnsList.forEach((i) => i.addEventListener("click", this.click));


	}

	click = (e) => {
			this.deactivate();
			this.activeIndex = Array.from(this.btnsList).indexOf(e.currentTarget);
			this.activate();
	};

	deactivate() {
			this.btnsList[this.activeIndex].classList.remove("active");
			this.tabsList[this.activeIndex].classList.remove("active");
	}

	activate() {
			this.btnsList[this.activeIndex].classList.add("active");
			this.tabsList[this.activeIndex].classList.add("active");
	}

	get btnHeight(){
			return this.tabs.offsetHeight;
	}

	get tabsHeight(){
			let maxHeight = 0;
			Array.from(this.tabsList).forEach((i)=>{
					if (i.offsetHeight>maxHeight){
							maxHeight =i.offsetHeight;
					}
			});
			return maxHeight;
	}

	setHeight(){
			this.tabs.style.height = `${this.btnHeight+this.tabsHeight}px`;
	}
}