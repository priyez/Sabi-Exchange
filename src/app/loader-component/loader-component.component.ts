import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss']
})
export class LoaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const loaderTimeline = gsap.timeline();
    loaderTimeline.to('.convert-from', { yPercent: -20, opacity: 0, delay: 0.9,  ease: 'Power3.out',})
    loaderTimeline.to('.equal', { yPercent: -20,opacity: 0, ease: 'Power3.out', })
    loaderTimeline.to('.convert-to', {yPercent: -20,opacity: 0,ease: 'Power3.out', })
    loaderTimeline.to('.loader', { duration: 1, height: '100%', ease: 'power2.inOut' });
    loaderTimeline.to('.loader', { duration: 1, height: '0%', ease: 'power2.inOut', delay: 1 });
    loaderTimeline.from('.nav', {
      xPercent: -20,
      opacity: 0,
      ease: 'Power3.out',
    })
  }

}
