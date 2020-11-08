pipeline {

  agent any
  
  stages {
  
    stage("build") {
    
      steps {
        echo 'Building the application...'
        sh 'npm i'
        sh 'npm run build'
      }
    }
    
    stage("test") {
    
      steps {
        echo 'Testing the application...'
        sh 'npm run test:ci'
      }
    }
  }
}
