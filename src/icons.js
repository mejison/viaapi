const icons = {
  logo: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="200" height="200" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0" transform="scale(0.005)"/>
      </pattern>
      <image id="image0" width="200" height="200" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBERDZDQjAyQkI4RDExRTE4RkU3QjhGMjI0OTc0M0UzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBERDZDQjAzQkI4RDExRTE4RkU3QjhGMjI0OTc0M0UzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERENkNCMDBCQjhEMTFFMThGRTdCOEYyMjQ5NzQzRTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERENkNCMDFCQjhEMTFFMThGRTdCOEYyMjQ5NzQzRTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rUpYyAAAQKUlEQVR42uydX27buBbG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"/>
      </defs>
    </svg>`
}

export default icons