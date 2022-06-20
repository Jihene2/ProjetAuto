package StepDefs;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;


public class PageObjetcs {
	
	        WebDriver driver;
	        
	        Page Inscription;
	        
	
		
		public void launch (WebDriver driver){
				this.driver=driver;
			System.out.println("Inside Step - browser is open");
			String projectPath = System.getProperty("user.dir");
			System.out.println("Project path is : "+projectPath);
			System.setProperty("webdriver.edge.driver", projectPath+"/src/test/resources/Drivers/msedgedriver.exe");
			driver = new EdgeDriver();
			driver.manage().window().maximize();
			driver.navigate().to("https://www.parashop.tn/");
		}
		
		
       public void Senregister() {
    	   
    	   
			Inscription.senregistrer.click();
       }
			
				
		public void Name(String arg1) {
			
			Inscription.firstname.sendKeys(arg1);			
		}
		
		public void FamillyName(String arg2) {
			
			Inscription.lastname.sendKeys(arg2);
		}
		
        public void email (String arg3) {
			
			Inscription.email.sendKeys(arg3);
		}
        
        public void telephone (String int1) {
			
			Inscription.telephone.sendKeys(int1);
		}
		
        public void password (String arg4) {
			
			Inscription.password.sendKeys(arg4);
		}
        
        public void confirmpassword (String arg5) {
			
			Inscription.confirm.sendKeys(arg5);
		}
        
        public void Agree () {
			
			Inscription.agree.click();
		}
        
        public void continuer() {
        	
        	Inscription.continuer.click();
        }
        
     
}
    
    
	

