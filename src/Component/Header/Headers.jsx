import profile from '../../assets/profile.png';

const Headers = () => {
    return (
        <div className='flex justify-between w-[80%] m-auto'>
            <h1 className="text-4xl">Knowledge Cafe</h1>
            <img src={profile} alt="image" />
        </div>
    );
};

export default Headers;