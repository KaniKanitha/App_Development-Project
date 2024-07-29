
// import React from 'react';

// const AdminDashboard = () => {
//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>Admin Dashboard</h1>
//       </header>
//       <main style={styles.main}>
//         <section style={styles.card}>
//           <h2>Section 1</h2>
//           <p>Content for section 1.</p>
//         </section>
//         <section style={styles.card}>
//           <h2>Section 2</h2>
//           <p>Content for section 2.</p>
//         </section>
//       </main>
//       <footer style={styles.footer}>
//         <p>© 2024 My Admin Dashboard</p>
//       </footer>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//   },
//   header: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '1rem',
//     textAlign: 'center',
//   },
//   main: {
//     flex: 1,
//     padding: '1rem',
//     display: 'flex',
//     gap: '1rem',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   card: {
//     backgroundColor: '#f4f4f4',
//     padding: '1rem',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     width: '45%',
//   },
//   footer: {
//     backgroundColor: '#333',
//     color: 'white',
//     padding: '1rem',
//     textAlign: 'center',
//   },
// };

// export default AdminDashboard;
// src/AdminDashboard.jsx



// src/AdminDashboard.jsx
import React from 'react';
import PieChart from './PieChart';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Section 1</h2>
          <p style={styles.cardContent}>Content for section 1.</p>
        </section>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Section 2</h2>
          <p style={styles.cardContent}>Content for section 2.</p>
        </section>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Pie Chart</h2>
          <PieChart />
        </section>
      </main>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 My Admin Dashboard</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  main: {
    flex: 1,
    padding: '1rem',
    display: 'flex',
    gap: '1rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '45%',
    minWidth: '300px',
  },
  cardTitle: {
    marginTop: 0,
    fontSize: '1.5rem',
    color: '#4CAF50',
  },
  cardContent: {
    fontSize: '1rem',
    color: '#666',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    margin: 0,
    fontSize: '0.875rem',
  },
};

export default AdminDashboard;//use this

