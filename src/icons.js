const icons = {
  logo: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="200" height="200" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0" transform="scale(0.005)"/>
      </pattern>
      <image id="image0" width="200" height="200" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBERDZDQjAyQkI4RDExRTE4RkU3QjhGMjI0OTc0M0UzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBERDZDQjAzQkI4RDExRTE4RkU3QjhGMjI0OTc0M0UzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERENkNCMDBCQjhEMTFFMThGRTdCOEYyMjQ5NzQzRTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERENkNCMDFCQjhEMTFFMThGRTdCOEYyMjQ5NzQzRTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rUpYyAAAQKUlEQVR42uydX27buBbG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"/>
      </defs>
    </svg>`,
  arrows: `
    <svg width="9" height="26" viewBox="0 0 9 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.40039 14.75C8.40039 14.6875 8.36914 14.6172 8.32227 14.5703L7.93164 14.1797C7.88477 14.1328 7.81445 14.1016 7.75195 14.1016C7.68945 14.1016 7.61914 14.1328 7.57227 14.1797L4.50195 17.25L1.43164 14.1797C1.38477 14.1328 1.31445 14.1016 1.25195 14.1016C1.18164 14.1016 1.11914 14.1328 1.07227 14.1797L0.681641 14.5703C0.634766 14.6172 0.603516 14.6875 0.603516 14.75C0.603516 14.8125 0.634766 14.8828 0.681641 14.9297L4.32227 18.5703C4.36914 18.6172 4.43945 18.6484 4.50195 18.6484C4.56445 18.6484 4.63477 18.6172 4.68164 18.5703L8.32227 14.9297C8.36914 14.8828 8.40039 14.8125 8.40039 14.75Z" fill="#BDBDBD"/>
    <path d="M0.599609 11.25C0.599609 11.3125 0.630859 11.3828 0.677734 11.4297L1.06836 11.8203C1.11523 11.8672 1.18555 11.8984 1.24805 11.8984C1.31055 11.8984 1.38086 11.8672 1.42773 11.8203L4.49805 8.75L7.56836 11.8203C7.61523 11.8672 7.68555 11.8984 7.74805 11.8984C7.81836 11.8984 7.88086 11.8672 7.92773 11.8203L8.31836 11.4297C8.36523 11.3828 8.39648 11.3125 8.39648 11.25C8.39648 11.1875 8.36523 11.1172 8.31836 11.0703L4.67773 7.42969C4.63086 7.38281 4.56055 7.35156 4.49805 7.35156C4.43555 7.35156 4.36523 7.38281 4.31836 7.42969L0.677734 11.0703C0.630859 11.1172 0.599609 11.1875 0.599609 11.25Z" fill="#BDBDBD"/>
    </svg>
    `,
  arrowsUp: `
    <svg width="9" height="26" viewBox="0 0 9 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.40039 14.75C8.40039 14.6875 8.36914 14.6172 8.32227 14.5703L7.93164 14.1797C7.88477 14.1328 7.81445 14.1016 7.75195 14.1016C7.68945 14.1016 7.61914 14.1328 7.57227 14.1797L4.50195 17.25L1.43164 14.1797C1.38477 14.1328 1.31445 14.1016 1.25195 14.1016C1.18164 14.1016 1.11914 14.1328 1.07227 14.1797L0.681641 14.5703C0.634766 14.6172 0.603516 14.6875 0.603516 14.75C0.603516 14.8125 0.634766 14.8828 0.681641 14.9297L4.32227 18.5703C4.36914 18.6172 4.43945 18.6484 4.50195 18.6484C4.56445 18.6484 4.63477 18.6172 4.68164 18.5703L8.32227 14.9297C8.36914 14.8828 8.40039 14.8125 8.40039 14.75Z" fill="#444"/>
    <path d="M0.599609 11.25C0.599609 11.3125 0.630859 11.3828 0.677734 11.4297L1.06836 11.8203C1.11523 11.8672 1.18555 11.8984 1.24805 11.8984C1.31055 11.8984 1.38086 11.8672 1.42773 11.8203L4.49805 8.75L7.56836 11.8203C7.61523 11.8672 7.68555 11.8984 7.74805 11.8984C7.81836 11.8984 7.88086 11.8672 7.92773 11.8203L8.31836 11.4297C8.36523 11.3828 8.39648 11.3125 8.39648 11.25C8.39648 11.1875 8.36523 11.1172 8.31836 11.0703L4.67773 7.42969C4.63086 7.38281 4.56055 7.35156 4.49805 7.35156C4.43555 7.35156 4.36523 7.38281 4.31836 7.42969L0.677734 11.0703C0.630859 11.1172 0.599609 11.1875 0.599609 11.25Z" fill="#BDBDBD"/>
    </svg>
    `,
  arrowsDown: `
    <svg width="9" height="26" viewBox="0 0 9 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.40039 14.75C8.40039 14.6875 8.36914 14.6172 8.32227 14.5703L7.93164 14.1797C7.88477 14.1328 7.81445 14.1016 7.75195 14.1016C7.68945 14.1016 7.61914 14.1328 7.57227 14.1797L4.50195 17.25L1.43164 14.1797C1.38477 14.1328 1.31445 14.1016 1.25195 14.1016C1.18164 14.1016 1.11914 14.1328 1.07227 14.1797L0.681641 14.5703C0.634766 14.6172 0.603516 14.6875 0.603516 14.75C0.603516 14.8125 0.634766 14.8828 0.681641 14.9297L4.32227 18.5703C4.36914 18.6172 4.43945 18.6484 4.50195 18.6484C4.56445 18.6484 4.63477 18.6172 4.68164 18.5703L8.32227 14.9297C8.36914 14.8828 8.40039 14.8125 8.40039 14.75Z" fill="#BDBDBD"/>
    <path d="M0.599609 11.25C0.599609 11.3125 0.630859 11.3828 0.677734 11.4297L1.06836 11.8203C1.11523 11.8672 1.18555 11.8984 1.24805 11.8984C1.31055 11.8984 1.38086 11.8672 1.42773 11.8203L4.49805 8.75L7.56836 11.8203C7.61523 11.8672 7.68555 11.8984 7.74805 11.8984C7.81836 11.8984 7.88086 11.8672 7.92773 11.8203L8.31836 11.4297C8.36523 11.3828 8.39648 11.3125 8.39648 11.25C8.39648 11.1875 8.36523 11.1172 8.31836 11.0703L4.67773 7.42969C4.63086 7.38281 4.56055 7.35156 4.49805 7.35156C4.43555 7.35156 4.36523 7.38281 4.31836 7.42969L0.677734 11.0703C0.630859 11.1172 0.599609 11.1875 0.599609 11.25Z" fill="#444"/>
    </svg>
    `,
  threeDots: `
    <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.59375 1.40625C10.0312 1.84375 10.25 2.375 10.25 3C10.25 3.625 10.0312 4.15625 9.59375 4.59375C9.15625 5.03125 8.625 5.25 8 5.25C7.375 5.25 6.84375 5.03125 6.40625 4.59375C5.96875 4.15625 5.75 3.625 5.75 3C5.75 2.375 5.96875 1.84375 6.40625 1.40625C6.84375 0.96875 7.375 0.75 8 0.75C8.625 0.75 9.15625 0.96875 9.59375 1.40625ZM11.9062 1.40625C12.3438 0.96875 12.875 0.75 13.5 0.75C14.125 0.75 14.6562 0.96875 15.0938 1.40625C15.5312 1.84375 15.75 2.375 15.75 3C15.75 3.625 15.5312 4.15625 15.0938 4.59375C14.6562 5.03125 14.125 5.25 13.5 5.25C12.875 5.25 12.3438 5.03125 11.9062 4.59375C11.4688 4.15625 11.25 3.625 11.25 3C11.25 2.375 11.4688 1.84375 11.9062 1.40625ZM0.90625 1.40625C1.34375 0.96875 1.875 0.75 2.5 0.75C3.125 0.75 3.65625 0.96875 4.09375 1.40625C4.53125 1.84375 4.75 2.375 4.75 3C4.75 3.625 4.53125 4.15625 4.09375 4.59375C3.65625 5.03125 3.125 5.25 2.5 5.25C1.875 5.25 1.34375 5.03125 0.90625 4.59375C0.46875 4.15625 0.25 3.625 0.25 3C0.25 2.375 0.46875 1.84375 0.90625 1.40625Z" fill="#BDBDBD"/>
    </svg>
    `,
  drug: `
    <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.625 0.625C2.86198 0.625 3.0625 0.716146 3.22656 0.898438C3.40885 1.0625 3.5 1.26302 3.5 1.5V3.25C3.5 3.48698 3.40885 3.69661 3.22656 3.87891C3.0625 4.04297 2.86198 4.125 2.625 4.125H0.875C0.638021 4.125 0.428385 4.04297 0.246094 3.87891C0.0820312 3.69661 0 3.48698 0 3.25V1.5C0 1.26302 0.0820312 1.0625 0.246094 0.898438C0.428385 0.716146 0.638021 0.625 0.875 0.625H2.625ZM2.625 5C2.86198 5 3.0625 5.09115 3.22656 5.27344C3.40885 5.4375 3.5 5.63802 3.5 5.875V7.625C3.5 7.86198 3.40885 8.07161 3.22656 8.25391C3.0625 8.41797 2.86198 8.5 2.625 8.5H0.875C0.638021 8.5 0.428385 8.41797 0.246094 8.25391C0.0820312 8.07161 0 7.86198 0 7.625V5.875C0 5.63802 0.0820312 5.4375 0.246094 5.27344C0.428385 5.09115 0.638021 5 0.875 5H2.625ZM2.625 9.375C2.86198 9.375 3.0625 9.46615 3.22656 9.64844C3.40885 9.8125 3.5 10.013 3.5 10.25V12C3.5 12.237 3.40885 12.4375 3.22656 12.6016C3.0625 12.7839 2.86198 12.875 2.625 12.875H0.875C0.638021 12.875 0.428385 12.7839 0.246094 12.6016C0.0820312 12.4375 0 12.237 0 12V10.25C0 10.013 0.0820312 9.8125 0.246094 9.64844C0.428385 9.46615 0.638021 9.375 0.875 9.375H2.625ZM7.875 0.625C8.11198 0.625 8.3125 0.716146 8.47656 0.898438C8.65885 1.0625 8.75 1.26302 8.75 1.5V3.25C8.75 3.48698 8.65885 3.69661 8.47656 3.87891C8.3125 4.04297 8.11198 4.125 7.875 4.125H6.125C5.88802 4.125 5.67839 4.04297 5.49609 3.87891C5.33203 3.69661 5.25 3.48698 5.25 3.25V1.5C5.25 1.26302 5.33203 1.0625 5.49609 0.898438C5.67839 0.716146 5.88802 0.625 6.125 0.625H7.875ZM7.875 5C8.11198 5 8.3125 5.09115 8.47656 5.27344C8.65885 5.4375 8.75 5.63802 8.75 5.875V7.625C8.75 7.86198 8.65885 8.07161 8.47656 8.25391C8.3125 8.41797 8.11198 8.5 7.875 8.5H6.125C5.88802 8.5 5.67839 8.41797 5.49609 8.25391C5.33203 8.07161 5.25 7.86198 5.25 7.625V5.875C5.25 5.63802 5.33203 5.4375 5.49609 5.27344C5.67839 5.09115 5.88802 5 6.125 5H7.875ZM7.875 9.375C8.11198 9.375 8.3125 9.46615 8.47656 9.64844C8.65885 9.8125 8.75 10.013 8.75 10.25V12C8.75 12.237 8.65885 12.4375 8.47656 12.6016C8.3125 12.7839 8.11198 12.875 7.875 12.875H6.125C5.88802 12.875 5.67839 12.7839 5.49609 12.6016C5.33203 12.4375 5.25 12.237 5.25 12V10.25C5.25 10.013 5.33203 9.8125 5.49609 9.64844C5.67839 9.46615 5.88802 9.375 6.125 9.375H7.875Z" fill="#BDBDBD"/>
    </svg>`
}

export default icons