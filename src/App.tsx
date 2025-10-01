function App() {
  return (
    <div className="cont">
      <header className="header">My tasks</header>
      <main className="tasks-grid main">
        <section className="tasks-grid__col tasks-grid__col--pending">
          <p className="tasks-grid__col__title">Pending</p>
        </section>
        <section className="tasks-grid__col tasks-grid__col--in-progress">
          <p className="tasks-grid__col__title">In progress</p>
        </section>
        <section className="tasks-grid__col tasks-grid__col--done">
          <p className="tasks-grid__col__title">Done</p>
        </section>
      </main>
    </div>
  )
}

export default App
