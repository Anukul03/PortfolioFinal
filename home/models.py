# home/models.py

class Project:
    def __init__(self, title, description, thumbnail, tags, skill_level, toolstack, duration):
        self.title = title
        self.description = description
        self.thumbnail = thumbnail
        self.tags = tags
        self.skill_level = skill_level
        self.toolstack = toolstack
        self.duration = duration
    
    def get_tags(self):
        return self.tags
    
    def get_tools(self):
        return self.toolstack

    @property
    def image_url(self):
        return f"/static/images/projects/{self.thumbnail}"

class Experience:
    def __init__(self, company, role, duration, description, achievements, toolstack):
        self.company = company
        self.role = role
        self.duration = duration
        self.description = description
        self.achievements = achievements
        self.toolstack = toolstack
    
    def get_achievements(self):
        return self.achievements
    
    def get_tools(self):
        return self.toolstack