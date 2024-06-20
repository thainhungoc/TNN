import React, { useState } from 'react'

export const Navbar = () => {
    const [title, setTitle] = useState<string>('');
    const change = (_title:string) =>{
        setTitle(_title)
    }

  return (
    <div>
        <button className={title == 'HomePage' ? 'active' : ''} onClick={()=> change("HomePage")}>Trang chu</button>
        <button className={title == 'Product' ? 'active' : ''} onClick={()=> change("Product")}>San pham</button>
        <button className={title == 'Profile' ? 'active' : ''} onClick={()=> change("Profile")}>Gioi thieu</button>
        <button className={title == 'Contact' ? 'active' : ''} onClick={()=> change("Contact")}>Lien he</button>
    </div>
  )
}
