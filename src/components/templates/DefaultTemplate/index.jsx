import { Outlet } from 'react-router-dom'
function DefaultTemplate() {
  return (
    <div id='default_template'>
        Default Template
        <div className='default_template_content'>
          <Outlet />
        </div>
    </div>
  )
}

export default DefaultTemplate