import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PalindromeChallengeComponent } from './palindrome-challenge.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Challenge: Palindrome check</h3>

    A palindrome is a word, phrase or series of words that reads the same backwards and forwards. Example: 'kayak' is a palindrom, 'hello' is not a palindrom. <br /> <br />
    <br />

    Part A: <br/>s
    - Write a function to check if a string is a palyndrome. <br />
    - The check should take place directly during input. Use reactive forms (preferred) or template driven forms (only when using signals). Do not bind native DOM events.<br />
    - Show a text "Yes, it is a palindrome" or "No, it is not a palindrome" <br />

    <br />
    <br />
    Part B: <br/>
    - Provide some suggestions while typing (see suggestion.service.ts). <br /> 
    - We do not want the api is called too often. <br />
    - In case of error display the error message.  <br />
    <br />
    <br />
    <hr />
    <br />
    <palindrome-challenge />
  `,
  imports: [PalindromeChallengeComponent],
})
export class App {}

bootstrapApplication(App);
