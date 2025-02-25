module.exports = {
    apps: [
      {
        name: 'ghg-fe',
        exec_mode: 'cluster',
        instances: '1', // Or a number of instances
        script: './node_modules/next/dist/bin/next',
        args: 'start',
        exp_backoff_restart_delay: 100, // optional, adjust as needed
        watch: true, // optional, adjust as needed
        max_memory_restart: '200M' // optional, adjust as needed
      }
    ]
  }