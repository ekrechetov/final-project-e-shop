import React, {Component} from 'react';

import './Slider.scss';

import Slide_1 from './../../images/img-slider/1_3_1.jpg';
import Slide_2 from './../../images/img-slider/seduction.jpg';
import Slide_3 from './../../images/img-slider/hugo.jpg';
import Slide_4 from './../../images/img-slider/clinique.jpg';
import Slide_5 from './../../images/img-slider/sora.jpg';
import Slide_6 from './../../images/img-slider/franck-olivier-bamboo-for-men_1.jpg';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    title: 'Bentley For Men Intense',
                    description: 'Туалетная вода',
                    text: 'Восхитительный и поистине непревзойденным аромат, который не нуждается в особом представлении. Bentley for Men Intense – настоящий мужской парфюм для ценителей роскоши и красоты от известного на весь мир автомобильного бренда Bentley.',
                    eachSlide: `url(${Slide_1})`
                },
                {
                    title: 'Blue Seduction Antonio Banderas',
                    description: 'Туалетная вода',
                    text: 'С первых аккордов аромата Blue Seduction Antonio Banderas понимаешь – вот он, идеальный мужской парфюм. Он легок и современен. Его благородство и элегантность в нотах прохлады и свежести. ',
                    eachSlide: `url(${Slide_2})`
                },
                {
                    title: 'Hugo Boss Hugo Extreme Men',
                    description: 'Парфюмированная вода',
                    text: 'Такой аромат забыть невозможно — кажется, он способен дарить такой заряд силы и ярких эмоций, что желание трудиться, добиваться побед и жить на полную появляется само собой.',
                    eachSlide: `url(${Slide_3})`
                },
                {
                    title: 'Clinique Happy For Men',
                    description: 'Одеколон',
                    text: 'Счастье – часть концепции роскошного одеколона для мужчин Happy от американского бренда Clinique. Новый запах – это квинтэссенция ярких эмоций, искренней радости и бесконечного счастья в лаконичном оранжевом флаконе.',
                    eachSlide: `url(${Slide_4})`
                },
                {
                    title: 'Sora Danger Sportive',
                    description: 'Одеколон',
                    text: 'Ароматы для мужчины, поступки которого воплощают уверенность и надежность. Ноты Sora Danger Sportive подчеркивают сложную структуру композиции, что по глубине не уступает современному мужчине.',
                    eachSlide: `url(${Slide_5})`
                },
                {
                    title: 'Franck Olivier Bamboo for Men',
                    description: 'Туалетная вода',
                    text: 'Не смотря на свой возраст, аромат Franck Olivier Bamboo for Men, до сих пор остается предметом споров и интриг любителей парфюмерии. Такая ситуация сложилась по той причине, что за небольшой ценой и обманчивой внешностью, скрывается настоящий ураган эмоций, которые не так-то просто унять.',
                    eachSlide: `url(${Slide_6})`
                }
            ],
            autoplay: false,
            active: 0,
            max: 0
        }
        this.state.max = this.state.slides.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
        this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
        this.nextOne = this.nextOne.bind(this);
        this.prevOne = this.prevOne.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.intervalBetweenSlides(), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    intervalBetweenSlides() {
        if (this.state.autoplay === true) {
            if (this.state.active === this.state.max - 1) {
                this.state.active = 0
            } else {
                this.state.active++
            }
            this.setState({
                active: this.state.active
            })
        }
    }

    toggleAutoPlay() {
        this.setState({
            autoplay: !this.state.autoplay
        })
    }

    nextOne() {
        (this.state.active < this.state.max - 1) ?
            this.setState({
                active: this.state.active + 1
            }) :
            this.setState({
                active: 0
            })
    }

    prevOne() {
        (this.state.active > 0) ?
            this.setState({
                active: this.state.active - 1
            }) :
            this.setState({
                active: this.state.max - 1
            })
    }

    dots(index, event) {
        this.setState({
            active: index
        })
    }

    isActive(value) {
        if (this.state.active === value) {
            return 'active'
        }
    }

    setSliderStyles() {

        const transition = this.state.active * -100 / this.state.slides.length

        return {
            width: (this.state.slides.length * 100) + '%',
            transform: `translateX(${transition}%`
        }
    }
    renderSlides() {
        return this.state.slides.map((item, index) => (
            <div
                key={index}
                style={{display: "flex", width: "100%"}}>
                <div className="slide-description">
                    <h3>
                        {item.title}
                    </h3>
                    <span>
                        {item.description}
                    </span>
                    <p>
                        {item.text}
                    </p>

                </div>
                <div
                    className='each-slide'
                    key={index}
                    style={{backgroundImage: item.eachSlide}}>
                </div>
            </div>
        ))
    }

    renderDots() {
        return this.state.slides.map((item, index) => (
            <li
                className={this.isActive(index) + 'dots'}
                key={index}
                ref="dots"
                onClick={this.dots.bind(this, index)}>
                <a>&#9679;</a>
            </li>
        ))
    }

    renderPlayStop() {
        let playStop;

        if (this.state.autoplay) {
            playStop = <svg fill='#512da8' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path
                    d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg>;
        } else {
            playStop = <svg fill='#512da8' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>;
        }
        return playStop
    }

    renderArrows() {
        return (
            <div>
                <button
                    type="button"
                    className="arrows prev"
                    onClick={this.prevOne}>
                    <svg fill='#C4C4BE' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>

                <button
                    type="button"
                    className="arrows next"
                    onClick={this.nextOne}>
                    <svg fill='#C4C4BE' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </div>
        )
    }

    render() {
        return (
            <div className="slider">
                <div
                    className="wrapper"
                    style={this.setSliderStyles()}>
                    {this.renderSlides()}
                </div>
                {this.renderArrows()}

                <ul className="dots-container">
                    {this.renderDots()}
                </ul>

                <a
                    className="toggle-play"
                    onClick={this.toggleAutoPlay}>
                    {this.renderPlayStop()}
                </a>
            </div>
        )
    }
}

export default Slider;