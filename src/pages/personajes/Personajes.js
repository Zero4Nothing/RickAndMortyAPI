import React from "react";
import LogoPersonajes from "../../components/logoPersonajes/LogoPersonajes";

function Personajes() {
  return (
    <div>
      <LogoPersonajes />
      <div class="bd-search" id="docsearch" data-bd-docs-version="5.3">
        <button
          type="button"
          class="DocSearch DocSearch-Button"
          aria-label="Search"
        >
          <span class="DocSearch-Button-Container">
            <svg
              width="20"
              height="20"
              class="DocSearch-Search-Icon"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="DocSearch-Button-Placeholder">Search</span>
          </span>
          <span class="DocSearch-Button-Keys">
            <kbd class="DocSearch-Button-Key">⌘</kbd>
            <kbd class="DocSearch-Button-Key">K</kbd>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Personajes;
