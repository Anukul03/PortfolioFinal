# home/tests.py
from django.test import TestCase
from .models import Project, Experience

class ProjectModelTest(TestCase):
    def test_project_creation(self):
        project = Project(
            title="Test Project",
            description="Test description",
            thumbnail="test.svg",
            tags=["ML", "Python"],
            skill_level=85,
            toolstack=["TensorFlow", "Pandas"],
            duration="3 months"
        )
        self.assertEqual(project.title, "Test Project")
        self.assertEqual(project.get_tags(), ["ML", "Python"])
        self.assertEqual(project.get_tools(), ["TensorFlow", "Pandas"])

class ExperienceModelTest(TestCase):
    def test_experience_creation(self):
        exp = Experience(
            company="Test Company",
            role="Data Scientist",
            duration="2020-2022",
            description="Test role description",
            achievements=["Achievement1", "Achievement2"],
            toolstack=["Python", "SQL"]
        )
        self.assertEqual(exp.company, "Test Company")
        self.assertEqual(exp.get_achievements(), ["Achievement1", "Achievement2"])
        self.assertEqual(exp.get_tools(), ["Python", "SQL"])