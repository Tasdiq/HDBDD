package StepDefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Util.Platform;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GUIStepDefinition extends Platform {
	WebDriver driver; 
	
	@Before
	public void initialize() {
		System.out.println("this is before class");

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\TQ\\Desktop\\Java-Workspace\\HDBDD\\chromedriver.exe");

		// Webdriver is interface
		driver = new ChromeDriver();
		driver.manage().window().maximize();

		driver.get("https://www.homedepot.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}
	
	@Given("^I enter search keywords as \"([^\"]*)\"$")
	public void entertext(String b) throws IOException {
		//findelement(driver, readproperties(driver, "search")).sendKeys(b);
		
		driver.findElement(By.xpath(".//*[@id='headerSearch']")).sendKeys(b);
	}
	
	@Then("^clickon \"([^\"]*)\"$")
	public void search(String a) throws IOException, InterruptedException {
		findelement(driver, readproperties(driver, a)).click();
		
		//driver.findElement(By.xpath(".//*[@id='headerSearchButton']")).click();
		
		sleep(driver, 5);
	}
	
	@After
	public void closingg() {
		driver.manage().deleteAllCookies();
		driver.quit();
	}
	
	
}
