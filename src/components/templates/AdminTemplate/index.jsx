import { Outlet } from 'react-router-dom'
function AdminTemplate() {
  return (
    <div id='admin_template'>
        Admin Template
        <div className='admin_template_content'>
          <Outlet />
        </div>
    </div>
  )
}

export default AdminTemplate