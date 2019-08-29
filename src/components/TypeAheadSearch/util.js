import startsWith from 'lodash.startswith';
import pullAll from 'lodash.pullall';

/**
 * Filters the passed in array based on the passed in filter.
 * Will match any strings regardless of casing that contain the
 * filter starting from the beginning of the word. Will not match
 * strings that contain the filter if it is not at the beginning of
 * a word.
 *
 * ex: the filter 'fo' will match 'foo bar' and 'bar foo', but not 'barfoo'
 *
 * @param {Array of {value: string} ]} data : array of objects to be filtered on property 'value'
 * @param {String} filter : string to filter data with
 */
export const filterData = (data, untrimmedFilter) => {
  const filter = untrimmedFilter.trim();
  return data.filter((dataItem) => {
    let suggestionSection = null;
    for (let wordIteration = 0; suggestionSection !== ''; wordIteration += 1) {
      suggestionSection = dataItem.value
        .split(' ')
        .slice(wordIteration)
        .join(' ');
      if (startsWith(suggestionSection.toLowerCase(), filter.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
};

/**
 * Sorts filtered data by:
 * 1) Matches casing starting from the beginning of the string (alphabetized)
 * 2) Matches casing starting on any other word but the beginning (alphabetized)
 * 3) Different casing starting from the beginning of the string (alphabetized)
 * 4) Different casing starting on any other word but the beginning (alphabetized)
 *
 * ex: with filter 'fo': 'foo bar', 'bar foo', 'Foo Bar', 'Bar Foo'
 *
 * @param {Array of {value: string} ]} data : array of filtered objects to be sorted
 * @param {String} filter : string data was filtered with
 */
export const sortFilteredData = (data, untrimmedFilter) => {
  const filter = untrimmedFilter.trim();

  // Remove any data items that have the same value
  const temp = [];
  const unsortedData = data.filter((dataItem) => {
    if (temp.includes(dataItem.value)) {
      return false;
    } else {
      temp.push(dataItem.value);
      return true;
    }
  });

  const sortedData = [];

  // Loop through each of the sorting iterations, stop early if
  // we have already sorted enough suggestions to populate the dropdown
  for (let sortIteration = 0; sortIteration < 4; sortIteration += 1) {
    const section = unsortedData.filter((dataItem) => {
      // First iteration return suggestions that match casing
      // of filter starting from the beginning of the string
      if (sortIteration === 0) {
        return startsWith(dataItem.value, filter);
      }

      // Second iteration return suggestions that match casing
      // of filter from start of any word in the string
      if (sortIteration === 1) {
        let caseSensitiveSection = null;
        let matches = false;
        for (
          let wordIteration = 1;
          caseSensitiveSection !== '' && !matches;
          wordIteration += 1
        ) {
          caseSensitiveSection = dataItem.value
            .split(' ')
            .slice(wordIteration)
            .join(' ');
          matches = startsWith(caseSensitiveSection, filter);
        }
        return matches;
      }

      // Third iteration return suggestions with different casing
      // that match filter starting from the beginning of the string
      if (sortIteration === 2) {
        return startsWith(dataItem.value.toLowerCase(), filter.toLowerCase());
      }

      // Final iteration return the rest of the unsorted data
      return true;
    });

    // Remove selected suggestions from the unsorted array to stop
    // them from being re-selected in the next iteration. Add the
    // selected suggestions to the sorted array.
    pullAll(unsortedData, section);
    sortedData.push(
      ...section.sort((a, b) => {
        return a.value < b.value ? -1 : 1;
      }),
    );
  }
  return sortedData;
};
