pipeline {

  agent {
    docker {
     image 'node:12.13.1-alpine' 
    }
  }
  
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
