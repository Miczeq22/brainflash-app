pipeline {

  agent any
  
  stages {
  
    stage("build") {
    
      steps {
        echo 'Building the application...'
        nodejs('Node 12') {
          sh 'npm i'
          sh 'npm run build'
        }
      }
    }
    
    stage("test") {
    
      steps {
        echo 'Testing the application...'
        nodejs('Node 12') {
          sh 'npm run test:ci'
        }
      }
    }
  }
}
