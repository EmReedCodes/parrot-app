
import './styles/style.css'

const Home = () => {
    return ( 
        <main className="container">
        <h1>Welcome to my App</h1>
        <section>
            <label htmlFor="userName">Username</label>
            <input type="text" />
            <button type='submit'>submit</button>
        </section>
        
        </main>
     );
}
 
export default Home;