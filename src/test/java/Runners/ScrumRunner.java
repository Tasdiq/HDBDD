package Runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\Feature\\homedepot.feature", glue = { "StepDefinition" }, format = {
		"pretty", "html:target/cucumber" }, tags = { "@P1" })

public class ScrumRunner {

	
	
}
