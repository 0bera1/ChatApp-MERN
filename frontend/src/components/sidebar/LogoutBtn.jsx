import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const LogoutBtn = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto '>
            {!loading ? (
                <BiLogOut className=' w-6 h-6 text-white cursor-pointer hover:text-lime-500' 
                onClick={logout}
                />
            ): (
                <span className='loading loading-spinner'></span>
            )}

        </div>
    )
}

export default LogoutBtn
