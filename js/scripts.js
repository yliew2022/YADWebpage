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
          const eventInfo = document.createElement('div');
          eventInfo.className = 'event-info';
          eventInfo.innerHTML = `<p>Time: 3:00 PM</p>`;
          dateItem.appendChild(eventInfo);
          dates.appendChild(dateItem);
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