import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Implement this function that check if given string is palindrome
const checkIsPalindrome = (str: string): boolean => {
  return false;
};

@Component({
  selector: 'palindrome-challenge',
  standalone: true,
  template: `
    <!-- Part A: Add an input field and show a text "Yes, it is a palindrome" or "No, it is not a palindrome" -->

    <!-- Part B: Show suggestions here -->
    <section class="suggestions">
      <div>Suggestion #1</div>
    </section>
  `,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  styles: [
    `
    .suggestions { margin-top: 1rem; width: 170px }
    .suggestions > div { padding: 3px; border-bottom: 1px solid gray; }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PalindromeChallengeComponent {
  // Please write your code here.
}
