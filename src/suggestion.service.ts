import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';

const values = ['kayak', 'madam', 'rotor', 'radar'];

@Injectable({ providedIn: 'root' })
export class SuggestionsService {
  getSuggestions(
    searchString: string,
    mockError = false
  ): Observable<string[]> {
    if (mockError) {
      return throwError(() => new Error('Network error.'));
    }

    return of(values.filter((value) => value.includes(searchString))).pipe(
      delay(300)
    );
  }
}
