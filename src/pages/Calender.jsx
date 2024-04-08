import React from 'react';
import { Agenda, Day, DragAndDrop, Month, Resize, ScheduleComponent, Week, WorkWeek, Inject  } from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import { scheduleData } from '../data/dummy';

const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category="App" title="Calender" />
      <ScheduleComponent 
      height='650px'
      eventSettings={{ dataSource: scheduleData}}
      selectedData={ new Date()}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      
    </div>
  )
}

export default Calender;
