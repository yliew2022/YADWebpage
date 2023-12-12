document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.getElementById('prev-month');
  const nextButton = document.getElementById('next-month');
  const currentMonth = document.getElementById('current-month');
  const dates = document.getElementById('dates');
  const today = new Date();
  let currentMonthDate = new Date(today.getFullYear(), today.getMonth(), 1);

  function renderCalendar() {
      currentMonth.textContent = new Date(currentMonthDate).toLocaleString('default', { month: 'long', year: 'numeric' });
      dates.innerHTML = '';

      const daysInMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();
      const firstDay = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), 1).getDay();

      for (let i = 0; i < firstDay; i++) {
          const emptyDate = document.createElement('div');
          emptyDate.className = 'date-box';
          dates.appendChild(emptyDate);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dateItem = document.createElement('div');
        dateItem.className = 'date-box';
        dateItem.textContent = day;
      
        // Check if there's an event for the current date (you should replace this condition with your own logic)
        const hasEvent = hasEventForDate(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), day);
      
        const eventInfo = document.createElement('div');
        eventInfo.className = 'event-info';
      
        // If there's an event, add a symbol (you can customize the symbol as needed)
        if (hasEvent) {
          const eventSymbol = document.createElement('span');
          eventSymbol.className = 'event-symbol';
          eventSymbol.textContent = '•'; // You can use any symbol or text here
          eventInfo.appendChild(eventSymbol);
        }
      
        dateItem.appendChild(eventInfo);
        dates.appendChild(dateItem);
      }
      
      function hasEventForDate(year, month, day) {
        return false;
      }
  }

  prevButton.addEventListener('click', function() {
      currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);
      renderCalendar();
  });

  nextButton.addEventListener('click', function() {
      currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);
      renderCalendar();
  });

  renderCalendar();

});